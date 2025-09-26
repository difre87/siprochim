"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBubbles = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const bubblesRef = useRef<THREE.Mesh[]>([]);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Configuration de la scène
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Configuration de la caméra
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    // Configuration du renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Matériau de bulle visible
    const createVisibleBubbleMaterial = () => {
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0.8, 0.9, 1.0),
        transparent: true,
        opacity: 0.3,
        roughness: 0.0,
        metalness: 0.0,
        transmission: 0.7,
        thickness: 0.2,
        ior: 1.33,
        iridescence: 0.8,
        iridescenceIOR: 1.3,
        iridescenceThicknessRange: [100, 400],
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
        reflectivity: 0.5,
      });
    };

    // Matériau pour les particules d'éclatement
    const createParticleMaterial = () => {
      return new THREE.MeshBasicMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.8,
      });
    };

    // Fonction pour créer l'effet d'éclatement
    const createBurstEffect = (position: THREE.Vector3, size: number) => {
      const particleCount = Math.floor(size * 20) + 5;
      const particles: THREE.Mesh[] = [];

      for (let i = 0; i < particleCount; i++) {
        const particleSize = Math.random() * 0.02 + 0.005;
        const geometry = new THREE.SphereGeometry(particleSize, 8, 8);
        const material = createParticleMaterial();
        const particle = new THREE.Mesh(geometry, material);

        particle.position.copy(position);

        const speed = Math.random() * 0.1 + 0.02;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        particle.userData = {
          velocityX: Math.sin(phi) * Math.cos(theta) * speed,
          velocityY: Math.sin(phi) * Math.sin(theta) * speed,
          velocityZ: Math.cos(phi) * speed,
          life: 1.0,
          decay: Math.random() * 0.02 + 0.01,
          gravity: -0.001,
        };

        scene.add(particle);
        particles.push(particle);
      }

      return particles;
    };

    // Créer les bulles
    const bubbles: THREE.Mesh[] = [];
    const particles: THREE.Mesh[] = [];
    const bubbleCount = 50;

    for (let i = 0; i < bubbleCount; i++) {
      const sizeType = Math.random();
      let size;

      if (sizeType < 0.6) {
        size = Math.random() * 0.1 + 0.05;
      } else if (sizeType < 0.85) {
        size = Math.random() * 0.15 + 0.15;
      } else {
        size = Math.random() * 0.2 + 0.3;
      }

      const geometry = new THREE.SphereGeometry(size, 32, 16);
      const material = createVisibleBubbleMaterial();
      const bubble = new THREE.Mesh(geometry, material);

      bubble.position.x = (Math.random() - 0.5) * 10;
      bubble.position.y = Math.random() * -10 - 2;
      bubble.position.z = (Math.random() - 0.5) * 3;

      bubble.userData = {
        speed: 0.02 + Math.random() * 0.03,
        amplitude: Math.random() * 0.2 + 0.1,
        frequency: Math.random() * 0.01 + 0.005,
        time: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.02 + 0.01,
        originalSize: size,
        isPopping: false,
        popTimer: 0,
        popDuration: 0.3,
      };

      scene.add(bubble);
      bubbles.push(bubble);
    }
    bubblesRef.current = bubbles;

    // Éclairage
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const colorLight = new THREE.PointLight(0x4169E1, 0.8, 50);
    colorLight.position.set(-5, 5, 3);
    scene.add(colorLight);

    // Animation
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Animer les bulles
      bubbles.forEach((bubble) => {
        if (!bubble.userData.isPopping) {
          // Animation normale
          bubble.position.y += bubble.userData.speed;

          bubble.userData.time += bubble.userData.frequency;
          bubble.position.x += Math.sin(bubble.userData.time) * bubble.userData.amplitude * 0.02;

          bubble.rotation.y += bubble.userData.rotationSpeed;
          bubble.rotation.x += bubble.userData.rotationSpeed * 0.5;

          // Effet de pulsation de l'iridescence
          if (bubble.material instanceof THREE.MeshPhysicalMaterial) {
            const iridescencePulse = 0.5 + Math.sin(bubble.userData.time * 3) * 0.3;
            bubble.material.iridescence = iridescencePulse;

            const opacityPulse = 0.2 + Math.sin(bubble.userData.time * 2) * 0.1;
            bubble.material.opacity = opacityPulse;
          }

          // Vérifier si la bulle doit éclater
          if (bubble.position.y > 7) {
            bubble.userData.isPopping = true;
            bubble.userData.popTimer = 0;

            // Créer l'effet d'éclatement
            const burstParticles = createBurstEffect(bubble.position.clone(), bubble.userData.originalSize);
            particles.push(...burstParticles);
          }
        } else {
          // Animation d'éclatement
          bubble.userData.popTimer += 0.016;

          const popProgress = bubble.userData.popTimer / bubble.userData.popDuration;

          if (popProgress < 1) {
            const scale = popProgress < 0.3 ?
              1 + popProgress * 2 :
              Math.max(0, 1.6 - (popProgress - 0.3) * 2.3);

            bubble.scale.setScalar(scale);

            if (bubble.material instanceof THREE.MeshPhysicalMaterial) {
              bubble.material.opacity = (1 - popProgress) * 0.3;
            }
          } else {
            // Réinitialiser la bulle
            bubble.userData.isPopping = false;
            bubble.userData.popTimer = 0;
            bubble.position.y = Math.random() * -5 - 10;
            bubble.position.x = (Math.random() - 0.5) * 10;
            bubble.position.z = (Math.random() - 0.5) * 3;
            bubble.scale.setScalar(1);

            if (bubble.material instanceof THREE.MeshPhysicalMaterial) {
              bubble.material.opacity = 0.3;
            }
          }
        }
      });

      // Animer les particules d'éclatement
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        particle.position.x += particle.userData.velocityX;
        particle.position.y += particle.userData.velocityY;
        particle.position.z += particle.userData.velocityZ;

        particle.userData.velocityY += particle.userData.gravity;
        particle.userData.life -= particle.userData.decay;

        if (particle.material instanceof THREE.MeshBasicMaterial) {
          particle.material.opacity = particle.userData.life * 0.8;
        }

        if (particle.userData.life <= 0) {
          scene.remove(particle);
          particle.geometry.dispose();
          if (Array.isArray(particle.material)) {
            particle.material.forEach(mat => mat.dispose());
          } else {
            particle.material.dispose();
          }
          particles.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    };

    // Démarrer l'animation immédiatement
    animate();

    // Forcer le premier rendu
    renderer.render(scene, camera);

    // Gestion du redimensionnement
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
      const currentMount = mountRef.current;
      if (currentMount && renderer.domElement && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }

      // Nettoyer les bulles
      bubbles.forEach(bubble => {
        scene.remove(bubble);
        bubble.geometry.dispose();
        if (Array.isArray(bubble.material)) {
          bubble.material.forEach(mat => mat.dispose());
        } else {
          bubble.material.dispose();
        }
      });

      // Nettoyer les particules
      particles.forEach(particle => {
        scene.remove(particle);
        particle.geometry.dispose();
        if (Array.isArray(particle.material)) {
          particle.material.forEach(mat => mat.dispose());
        } else {
          particle.material.dispose();
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-10"
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    />
  );
};

export default ThreeBubbles;