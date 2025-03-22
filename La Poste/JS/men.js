var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

















// setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(ctx);
let gradient = ctx.createLinearGradient(0,0,canvas.width, 0);
gradient.addColorStop(0, 'white');
gradient.addColorStop(0.5, 'lightblue');
gradient.addColorStop(1, 'navy');
ctx.fillStyle = gradient;

class Particle {
    constructor(effect){
        this.effect = effect;
        this.radius = 0.3;
        this.minRadius = this.radius;
        this.maxRadius = Math.random() * 80 + 20;
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
        this.vx = Math.random() * 0.2 - 0.1;
        this.vy = Math.random() * 0.2 - 0.1;
    }
    draw(context){
        if (this.radius > 0.4){
            context.fillStyle = gradient;
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            context.fill();
            context.stroke();

            context.fillStyle = 'rgba(255,255,255,0.5)';
            context.beginPath();
            context.arc(this.x - this.radius * 0.2, this.y - this.radius * 0.3, this.radius * 0.6, 0, Math.PI * 2);
            context.fill();
        }

    }
    update(){
            const dx = this.x - this.effect.mouse.x;
            const dy = this.y - this.effect.mouse.y;
            const distance = Math.hypot(dx, dy);
             if (distance < this.effect.mouse.radius && this.radius < this.maxRadius){
                this.radius += 3;
            }
        if (this.radius > this.minRadius) this.radius -= 0.2;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < this.radius){
            this.x = this.radius;
            this.vx *= -1;
        } else if (this.x > this.effect.width - this.radius){
            this.x = this.effect.width - this.radius;
            this.vx *= -1;
        }
        if (this.y < this.radius){
            this.y = this.radius;
            this.vy *= -1;
        } else if (this.y > this.effect.height - this.radius){
            this.y = this.effect.height - this.radius;
            this.vy *= -1;
        }
    }
    reset(){
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
        this.radius = this.minRadius;
    }
}

class Effect {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 2000;
        this.createParticles();
        this.angle = 0;

        this.mouse = {
            x: 0,
            y: 0,
            pressed: false,
            radius: 60
        }

        window.addEventListener('resize', e => {
            this.resize(e.target.window.innerWidth, e.target.window.innerHeight);
        });
        window.addEventListener('mousemove', e => {
            if (this.mouse.pressed){
                this.mouse.x = e.x;
                this.mouse.y = e.y;
            }
        });
        window.addEventListener('mousedown', e => {
            this.mouse.pressed = true;
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
        window.addEventListener('mouseup', e => {
            this.mouse.pressed = false;
        });
    }
    createParticles(){
        for (let i = 0; i < this.numberOfParticles; i++){
            this.particles.push(new Particle(this));
        }
    }
    handleParticles(context){
        //this.connectParticles(context);
        this.autoMouse()
        this.particles.forEach(particle => {
            particle.draw(context);
            particle.update();
        });
    }
    connectParticles(context){
        const maxDistance = 80;
        for (let a = 0; a < this.particles.length; a++){
            for (let b = a; b < this.particles.length; b++){
                const dx = this.particles[a].x - this.particles[b].x;
                const dy = this.particles[a].y - this.particles[b].y;
                const distance = Math.hypot(dx, dy);
                if (distance < maxDistance){
                    context.save();
                    const opacity = 1 - (distance/maxDistance);
                    context.globalAlpha = opacity;
                    context.beginPath();
                    context.moveTo(this.particles[a].x, this.particles[a].y);
                    context.lineTo(this.particles[b].x, this.particles[b].y);
                    context.stroke();
                    context.restore();
                }
            }
        }
    }
    autoMouse(){
        if (!this.mouse.pressed){
            this.mouse.x = this.width * 0.5 + Math.cos(this.angle * 0.5) * this.width * 0.3;
            this.mouse.y = this.height * 0.5 + Math.sin(this.angle) * this.height * 0.3;
            this.angle += 0.03;
            if (this.angle > Math.PI * 4) this.angle = 0;
        }
    }
    resize(width, height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        gradient = ctx.createLinearGradient(0,0,canvas.width, 0);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(0.5, 'lightblue');
        gradient.addColorStop(1, 'navy');
        this.context.fillStyle = gradient;
        this.particles.forEach(particle => {
            particle.reset();
        });
    }
}
const effect = new Effect(canvas, ctx);

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.handleParticles(ctx);
    requestAnimationFrame(animate);
}
animate();
