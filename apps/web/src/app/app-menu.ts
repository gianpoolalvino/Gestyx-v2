import { NavGroup } from '@gestyx/shared-ui';

export const APP_MENU: NavGroup[] = [
    {
      label: 'Navegación',
      items: [
        { label: 'Inicio', icon: 'pi pi-home', route: '/' },
        { label: 'Notificaciones', icon: 'pi pi-bell', badge: '3' },
      ],
    },
    {
      label: 'Gestión',
      items: [
        {
          label: 'Empleados',
          icon: 'pi pi-users',
          open: true,
          children: [
            { label: 'Lista', route: '/empleados' },
            { label: 'Nuevo', route: '/empleados/nuevo' },
          ],
        },
        {
          label: 'Reportes',
          icon: 'pi pi-chart-bar',
          children: [
            { label: 'Resumen', route: '/reportes' },
            { label: 'Mensual', route: '/reportes/mensual' },
          ],
        },
        { label: 'Calendario', icon: 'pi pi-calendar' },
      ],
    },
];