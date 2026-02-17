class Particle {
    constructor(canvas) {
      this.canvas = canvas;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.dx = (Math.random() - 0.5) * 0.3;
      this.dy = (Math.random() - 0.5) * 0.3;
      this.radius = Math.random() * 1.5 + 0.5;
      
      const colors = ['#00d4ff', '#0099ff', '#64748b'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
  
    update() {
      if (this.x < 0 || this.x > this.canvas.width) this.dx *= -1;
      if (this.y < 0 || this.y > this.canvas.height) this.dy *= -1;
  
      this.x += this.dx;
      this.y += this.dy;
    }
  
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }
  
class ParticleAnimation {
      constructor() {
      this.canvas = document.getElementById('particleCanvas');
      this.ctx = this.canvas.getContext('2d', { alpha: true });
      this.particles = [];
      this.dpr = window.devicePixelRatio || 1;
  
      this.resizeCanvas();
      this.initParticles();
      
      window.addEventListener('resize', () => this.resizeCanvas());
      this.animate();
    }
  
    resizeCanvas() {
      this.canvas.width = window.innerWidth * this.dpr;
      this.canvas.height = window.innerHeight * this.dpr;
      this.canvas.style.width = window.innerWidth + 'px';
      this.canvas.style.height = window.innerHeight + 'px';
      this.ctx.scale(this.dpr, this.dpr);
    }
  
    initParticles() {
      this.particles = [];
      for (let i = 0; i < 40; i++) {
        this.particles.push(new Particle(this.canvas));
      }
    }
  
    animate() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      this.ctx.fillStyle = 'rgba(10, 14, 39, 0.02)';
      this.ctx.fillRect(0, 0, width, height);
  
      this.particles.forEach(particle => {
        particle.update();
        particle.draw(this.ctx);
      });
  
      requestAnimationFrame(() => this.animate());
    }
  }
  
  // Initialize the animation when the page loads
  document.addEventListener('DOMContentLoaded', () => {
      new ParticleAnimation();

      // 3D name rotation based on mouse position
      const nameEl = document.getElementById('name3d');
      const hero = document.querySelector('.hero-section');
      if (nameEl && hero) {
        hero.addEventListener('mousemove', (e) => {
          const rect = hero.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const cx = rect.width / 2;
          const cy = rect.height / 2;
          const dx = (x - cx) / cx; // -1 .. 1
          const dy = (y - cy) / cy;
          const rotY = dx * 12; // degrees
          const rotX = -dy * 12;
          const tz = 24; // push forward slightly
          nameEl.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${tz}px)`;
          // subtle colored rim depending on angle
          const glowX = Math.round(rotY * 0.6);
          const glowY = Math.round(rotX * 0.6);
          nameEl.style.textShadow = `${-glowX}px ${glowY}px 10px rgba(0,212,255,0.25), 0 6px 18px rgba(0,0,0,0.35)`;
        });

        hero.addEventListener('mouseleave', () => {
          nameEl.style.transform = '';
          nameEl.style.textShadow = '';
        });
      }
    });

  // Idle animation loop (subtle, professional floating) separate from mouse events
  // Uses last interaction timestamp to only run when user isn't interacting
  (() => {
    const nameEl = document.getElementById('name3d');
    const hero = document.querySelector('.hero-section');
    if (!nameEl || !hero) return;

    let lastInteraction = Date.now();
    let isHovering = false;
    let spinning = false;

    // track current orientation so spin can start from current pose
    let currentRotX = 0;
    let currentRotY = 0;
    let currentTz = 20;

    hero.addEventListener('mousemove', () => { lastInteraction = Date.now(); isHovering = true; if (spinning) spinning = false; });
    hero.addEventListener('mouseenter', () => { lastInteraction = Date.now(); isHovering = true; if (spinning) spinning = false; });
    hero.addEventListener('mouseleave', () => { lastInteraction = Date.now(); isHovering = false; });

    function easeOutQuad(t) { return t * (2 - t); }

    function startSpin() {
      if (spinning) return;
      // don't start if user recently interacted
      if ((Date.now() - lastInteraction) < 900 || isHovering) return scheduleNextSpin(1200);
      spinning = true;
      const duration = 1000 + Math.random() * 800; // 1s - 1.8s
      const startX = currentRotX;
      const startY = currentRotY;
      const startTz = currentTz;
      const start = performance.now();

      function spinFrame(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = easeOutQuad(p);
        const added = eased * 360; // full turn
        const rotY = startY + added;
        // small bounce on X during spin for class
        const rotX = startX + Math.sin(eased * Math.PI) * 8;
        const tz = startTz + Math.sin(eased * Math.PI) * 2;
        nameEl.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${tz}px)`;
        nameEl.style.transition = 'transform 0.14s linear';
        // update text shadow for depth
        nameEl.style.textShadow = `${-rotY * 0.02}px ${rotX * 0.4}px 18px rgba(0,212,255,0.18), 0 10px 30px rgba(0,0,0,0.36)`;
        if (p < 1 && spinning) {
          requestAnimationFrame(spinFrame);
        } else {
          spinning = false;
          // normalize current angles to within -180..180 for smoother subsequent transforms
          currentRotX = ((rotX + 180) % 360) - 180;
          currentRotY = ((rotY + 180) % 360) - 180;
          currentTz = tz;
          scheduleNextSpin();
        }
      }

      requestAnimationFrame(spinFrame);
    }

    let spinTimeout = null;
    function scheduleNextSpin(delay) {
      if (spinTimeout) clearTimeout(spinTimeout);
      const wait = typeof delay === 'number' ? delay : (5000 + Math.random() * 14000); // 5s - 19s
      spinTimeout = setTimeout(() => {
        startSpin();
      }, wait);
    }

    // Idle animation loop (subtle, professional floating) separate from mouse events
    // Uses last interaction timestamp to only run when user isn't interacting
    function idleStep(t) {
      const now = Date.now();
      const idle = (now - lastInteraction) > 1200; // 1.2s threshold

      if (!isHovering && idle && !spinning) {
        const s = t / 1000; // seconds
        const rotY = Math.sin(s * 0.6) * 6; // gentle horizontal sway
        const rotX = Math.sin(s * 0.8) * 3; // subtle vertical tilt
        const tz = 20 + Math.sin(s * 0.7) * 1.5; // tiny pop in/out
        nameEl.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${tz}px)`;
        nameEl.style.transition = 'transform 0.9s cubic-bezier(.22,.9,.28,1), text-shadow 0.6s ease';
        nameEl.style.textShadow = `${-rotY * 0.6}px ${rotX * 0.6}px 16px rgba(0,212,255,0.12), 0 8px 24px rgba(0,0,0,0.32)`;
        currentRotX = rotX;
        currentRotY = rotY;
        currentTz = tz;
      }

      requestAnimationFrame(idleStep);
    }

    // start idle loop and schedule first spin
    requestAnimationFrame(idleStep);
    scheduleNextSpin();
  })();