import { Controller, Get, Body } from '@nestjs/common';

@Controller('cliente')
export class ClienteController {
  @Get()
  listarClientes() {
    return { clientes: [{ nome: 'hugo' }, { nome: 'juliana' }] }
  }
}
