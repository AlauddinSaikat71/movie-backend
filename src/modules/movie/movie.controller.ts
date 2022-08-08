import {
  MOVIERequestLogInterceptor,
  MOVIEValidationPipe,
  TransformInterceptor,
} from '@movie/common';
import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MovieService } from './movie.service';

@Controller('movie')
@ApiTags('Movie APIs')
//@ApiGuard()
@UsePipes(MOVIEValidationPipe)
@UseInterceptors(TransformInterceptor, MOVIERequestLogInterceptor)
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  public getMovie() {
    return 1;
  }
}
