class Particle {
    constructor(canvas) {
      this.canvas = canvas;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.dx = (Math.random() - 0.5) * 0.5;
      this.dy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
      
      const colors = ['#ff4444', '#4444ff', '#ffffff'];
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
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
  
      this.resizeCanvas();
      this.initParticles();
      
      window.addEventListener('resize', () => this.resizeCanvas());
      this.animate();
    }
  
    resizeCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  
    initParticles() {
      this.particles = [];
      for (let i = 0; i < 50; i++) {
        this.particles.push(new Particle(this.canvas));
      }
    }
  
    animate() {
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  
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
  });