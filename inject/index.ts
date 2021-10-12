/**
 * 依赖注入
 */
import 'reflect-metadata'
import { inject, injectable, Container } from 'inversify'

const container = new Container()
@injectable()
class PopMusic {
  getName() {
    return '流行音乐'
  }
}

container.bind('request1').to(PopMusic)

@injectable()
class ClassicalMusic {
  getName() {
    return '古典音乐'
  }
}
container.bind('request2').to(ClassicalMusic)

@injectable()
class Music {
  pm: any
  cm: any
  constructor(
    @inject('request1') popMusic: any,
    @inject('request2') classicalMusic: any

  ) {
    this.pm = popMusic
    this.cm = classicalMusic
  }

  getName() {
    const result = this.pm.getName() + this.cm.getName()
    return result
  }

  get(name: string) {
    console.log('name', name)
  }
}
container.bind('Plan').to(Music)

// const music: any = container.get('request1')

const music: any = container.get('Plan')

console.log(music.get('小王'))

const a = [1, 2, 3, 4]


function name() {
  for (const iterator of a) {
    console.log(iterator)
    if (iterator === 2) {
      return 'exit';
    }
  }
}

name()


