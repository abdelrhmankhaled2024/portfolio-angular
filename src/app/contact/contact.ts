import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  submitted = signal(false);

  onSubmit() {
    const { name, email, message } = this.form;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:abdelrhmankhaled060@gmail.com?subject=${subject}&body=${body}`;
    this.submitted.set(true);
    setTimeout(() => this.submitted.set(false), 3000);
  }

  links = [
    { label: 'Email', value: 'abdelrhmankhaled060@gmail.com', href: 'mailto:abdelrhmankhaled060@gmail.com', icon: '✉️' },
    { label: 'Phone / WhatsApp', value: '+201060644997', href: 'https://wa.me/201060644997', icon: '💬' },
    { label: 'LinkedIn', value: 'abdelrhmankhaled2024', href: 'https://www.linkedin.com/in/abdelrhmankhaled2024/', icon: '💼' },
    { label: 'GitHub', value: 'abdelrhmankhaled2024', href: 'https://github.com/abdelrhmankhaled2024', icon: '🐙' },
  ];
}
