import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Book {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-book-carousel',
  template: `
    <div class="carousel-container">
      <button class="nav-button prev" (click)="previousSlide()">&lt;</button>
      
      <div class="carousel">
        <div class="slide" *ngFor="let book of books; let i = index" 
             [class.active]="i === currentIndex"
             (click)="showPopup(book)">
          <img [src]="book.imageUrl" [alt]="book.title">
        </div>
      </div>
      
      <button class="nav-button next" (click)="nextSlide()">&gt;</button>
    </div>

    <!-- Popup -->
    <div class="popup" *ngIf="selectedBook" (click)="closePopup()">
      <div class="popup-content" (click)="$event.stopPropagation()">
        <button class="close-button" (click)="closePopup()">×</button>
        <img [src]="selectedBook.imageUrl" [alt]="selectedBook.title">
        <h2>{{selectedBook.title}}</h2>
        <p>{{selectedBook.description}}</p>
      </div>
    </div>
  `,
  styles: [`
    .carousel-container {
      position: relative;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      align-items: center;
    }

    .carousel {
      width: 100%;
      height: 400px;
      position: relative;
      overflow: hidden;
    }

    .slide {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .slide.active {
      opacity: 1;
    }

    .slide img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      z-index: 1;
    }

    .prev {
      left: 10px;
    }

    .next {
      right: 10px;
    }

    .popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .popup-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      max-width: 500px;
      position: relative;
    }

    .popup-content img {
      max-width: 100%;
      height: auto;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
  `]
})
export class BookCarouselComponent {
  books: Book[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      description: 'A classic novel by F. Scott Fitzgerald about the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      description: 'Harper Lee\'s masterpiece about racial injustice and the loss of innocence in the American South.'
    },
    {
      id: 3,
      title: '1984',
      imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
      description: 'George Orwell\'s dystopian social science fiction novel about totalitarianism and surveillance society.'
    }
  ];

  currentIndex = 0;
  selectedBook: Book | null = null;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.books.length;
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.books.length) % this.books.length;
  }

  showPopup(book: Book) {
    this.selectedBook = book;
  }

  closePopup() {
    this.selectedBook = null;
  }
}