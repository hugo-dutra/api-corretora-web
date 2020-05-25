import { SecurityService } from './security.service';
import { Controller, Get } from '@nestjs/common';
import { cipherKey } from '../../config/security.config'

@Controller('security')
export class SecurityController {
  constructor(private service: SecurityService) { }
  @Get('/key')
  public getCipherKey(): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve(cipherKey.keyServer);
    })
  }


}
