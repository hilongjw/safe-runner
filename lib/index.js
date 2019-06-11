class Runner {
  constructor (options) {
    this.options = Object.assign({
      mode: 'thread',
      entry: ''
    }, options)
  }

  async invoke (event) {
    // TODO
  }

  async destroy () {
    // TODO
  }
}

module.exports = Runner
