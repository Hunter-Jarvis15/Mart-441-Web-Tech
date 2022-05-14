$(function () {
    var w = window.innerWidth * .9;
    var h = window.innerWidth * .9;
    canvas = $("#canvas").get(0);
    var particleCount = 500;
    var particles = []; 
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d"); 
    ctx.globalCompositeOperation = "multiply";

    function clearCanvas() {
        ctx.clearRect(0, 0, w, h);
    }

    function Particle() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.direction = {
            "x": -1 + Math.random() * 2,
            "y": -1 + Math.random() * 2
        };
        this.vx = (2 * Math.random() + 4)*.1;
        this.vy = (2 * Math.random() + 4)*.1;
        this.radius = 10 * Math.random() + 3;
        this.move = function () {
            this.x += this.vx * this.direction.x;
            this.y += this.vy * this.direction.y;
        };
        this.changeDirection = function (axis) {
            this.direction[axis] *= -1;
        };
        this.draw = function () {
            ctx.beginPath();
            ctx.fillStyle = "rgba(144,213,60,0.5)";
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        };
        this.boundaryCheck = function () {
            if (this.x >= w) {
                this.x = w;
                this.changeDirection("x");
            } else if (this.x <= 0) {
                this.x = 0;
                this.changeDirection("x");
            }
            if (this.y >= h) {
                this.y = h;
                this.changeDirection("y");
            } else if (this.y <= 0) {
                this.y = 0;
                this.changeDirection("y");
            }
        };
    } 

    function createParticles() {
        for (var i = particleCount - 1; i >= 0; i--) {
            p = new Particle();
            particles.push(p);
        }
    }

    function drawParticles() {
        for (var i = particleCount - 1; i >= 0; i--) {
            p = particles[i];
            p.draw();
        }
    }

    function updateParticles() {
        for (var i = particles.length - 1; i >= 0; i--) {
            p = particles[i];
            p.move();
            p.boundaryCheck();

        }
    }

    function initParticleSystem() {
        createParticles();
        drawParticles();
    }

    function animateParticles() {
        clearCanvas();
        drawParticles();
        updateParticles();
        requestAnimationFrame(animateParticles);
    }
  
    initParticleSystem();
    requestAnimationFrame(animateParticles);
});