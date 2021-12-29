import { HttpStatus } from '@nestjs/common';

export class ResponseData {
  status: HttpStatus;

  message?: string;

  data: any;
}
