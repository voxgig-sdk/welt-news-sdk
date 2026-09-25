

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WeltNewsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ArticleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WELT_NEWS_TEST_LIVE=TRUE.
  afterEach(liveDelay('WELT_NEWS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WeltNewsSDK.test()
    const ent = testsdk.Article()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WELT_NEWS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'article.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"article","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /articles/home","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/articles/home","q":{"$action":"home"},"r":{},"s":[{"lit":"articles"},{"lit":"home"}],"t":{"req":"`reqdata`","res":"`body.articles`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"article","name__orig":"article","Name":"Article","name_":"article","name-":"article","NAME":"ARTICLE","index$":0}, {"active":true,"entity":"article","key$":"BasicArticleFlow","kind":"basic","name":"BasicArticleFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"article_ref01"}}],"index$":0}]}, 'Article', {"GET /articles/home":{"protocol":"http","operationId":"getHomeArticles","responses":{"200":{"description":"Successful response with news articles","content":{"application/json":{"schema":{"type":"object","properties":{"articles":{"items":{"properties":{"author":{"description":"Article author name","type":"string"},"category":{"description":"Article category (e.g., politics, economy, culture, sports)","type":"string"},"description":{"description":"Brief summary of the article","type":"string"},"id":{"description":"Unique identifier for the article","type":"string"},"imageUrl":{"description":"URL to the article's main image","format":"uri","type":"string"},"publishedAt":{"description":"Publication timestamp","format":"date-time","type":"string"},"title":{"description":"Article headline","type":"string"},"url":{"description":"URL to the full article","format":"uri","type":"string"}},"type":"object"},"key$":"articles","type":"array"}}}}}},"400":{"description":"Bad request - Invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let article_ref01_data = Object.values(setup.data.existing.article)[0] as any

    // LIST
    const article_ref01_ent = client.Article()
    const article_ref01_match: any = {}

    const article_ref01_list = (await article_ref01_ent.list(article_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/article/ArticleTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WeltNewsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['article01','article02','article03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WELT_NEWS_TEST_ARTICLE_ENTID': idmap,
    'WELT_NEWS_TEST_LIVE': 'FALSE',
    'WELT_NEWS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WELT_NEWS_TEST_ARTICLE_ENTID']

  const live = 'TRUE' === env.WELT_NEWS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WELT_NEWS_TEST_ARTICLE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WeltNewsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.WELT_NEWS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
