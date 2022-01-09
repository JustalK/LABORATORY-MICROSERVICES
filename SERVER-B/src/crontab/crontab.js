const cron_test = require('@src/crontab/cron/cron_test')

module.exports = {
  start: () => {
    cron_test.cron_test()
  }
}
