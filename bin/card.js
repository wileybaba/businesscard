#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const options = {
  padding: 1,
  margin: 1, 
  borderStyle: 'round'
}

const data = {
  name: chalk.white('Wiley McKay Conte /'),
  handle: chalk.cyan('wileybaba'),
  work: chalk.white('Software Engineer at Legalpad'),
  twitter: chalk.cyan('twitter.com/wiley_baba'),
  github: chalk.cyan('github.com/wileybaba'),
  web: chalk.cyan('wileys.website'),
  npx: chalk.white('npx wmc'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))