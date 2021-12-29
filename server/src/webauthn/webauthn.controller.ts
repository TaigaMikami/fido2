import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { ResponseData } from 'src/common/dto/response-data.dto';
import { CreateUserDto } from 'src/webauthn/dto/create-user.dto';
import { WebauthnService } from './webauthn.service';

@Controller('webauthn')
export class WebauthnController {
  constructor(private readonly webauthnService: WebauthnService) {}

  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto): Promise<ResponseData> {
    const userCreationOptions =
      await this.webauthnService.generateServerMakeCredRequest(createUserDto);
    const responseData = new ResponseData();
    if (!userCreationOptions) {
      responseData.status = HttpStatus.BAD_REQUEST;
      responseData.data = null;
    } else {
      responseData.status = HttpStatus.CREATED;
      responseData.data = userCreationOptions;
    }
    return responseData;
  }
}
