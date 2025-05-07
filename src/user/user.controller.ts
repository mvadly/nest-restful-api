import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { WebResponse } from 'src/model/web.model';
import { RegisterUserRequest, UserResponse } from 'src/model/user.model';

@Controller('/api/users')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  @HttpCode(200)
  async register(
    @Body() request: RegisterUserRequest,
  ): Promise<WebResponse<UserResponse>> {
    const result = await this.userService.register(request);
    return {
      data: result,
    };
  }

  @Get(':id')
  @HttpCode(200)
  async getUserById(
    @Param('username') username: string,
  ): Promise<WebResponse<UserResponse>> {
    const result = await this.userService.getUserByUsername(username);
    return {
      data: result,
    };

  }
}
