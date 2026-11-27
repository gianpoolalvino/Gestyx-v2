import { Component, computed, input, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export interface NavChild {
  label: string;
  route: string;
}

export interface NavItem {
  label: string;
  icon: string;
  route?: string;
  badge?: string;
  /** Si tiene hijos, se abre al hacer clic. `open: true` lo deja abierto al inicio. */
  children?: NavChild[];
  open?: boolean;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

@Component({
  selector: 'gx-main-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgTemplateOutlet,AvatarModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  readonly appName = input('Gestyx');
  readonly userName = input('Usuario');
  readonly menu = input<NavGroup[]>([]);

  protected readonly logoLetter = computed(() => this.appName().charAt(0).toUpperCase());
  protected readonly initials = computed(() =>
    this.userName()
      .split(' ')
      .filter(Boolean)
      .map((word) => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase(),
  );

  /** Recuerda qué submenús el usuario abrió o cerró (clave = label del item). */
  private readonly expanded = signal<Record<string, boolean>>({});

  protected isOpen(item: NavItem): boolean {
    return this.expanded()[item.label] ?? item.open ?? false;
  }

  protected toggle(item: NavItem): void {
    this.expanded.update((state) => ({ ...state, [item.label]: !this.isOpen(item) }));
  }
}
