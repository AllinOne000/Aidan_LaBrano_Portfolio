import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, OnDestroy {
  @ViewChild('matrixCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private animationInterval: any;
  private ctx!: CanvasRenderingContext2D;
  private drops: number[] = [];

  ngOnInit() {
    this.initMatrixEffect();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  ngOnDestroy() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private initMatrixEffect() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    this.drops = Array(Math.floor(columns)).fill(1);

    this.animationInterval = setInterval(() => this.draw(), 33);
  }

  private draw() {
    const canvas = this.canvasRef.nativeElement;
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01';
    const charArray = chars.split('');
    const fontSize = 14;

    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    this.ctx.fillStyle = '#0F0';
    this.ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < this.drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];
      this.ctx.fillText(text, i * fontSize, this.drops[i] * fontSize);
      
      if (this.drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  }

  private handleResize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    this.drops = Array(Math.floor(columns)).fill(1);
  }
}