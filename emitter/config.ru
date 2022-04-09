#!/usr/bin/env -S falcon serve --count 1 --config
# frozen_string_literal: true

require 'async'
require 'roda'
require 'msgpack'
require 'json'

class App < Roda
  plugin :websockets # ready to rock 🤘 (in the future)

  demo_big = IO.read('data/big.json')
  demo_big = JSON.parse(demo_big)

  demo_mini = IO.read('data/mini.json')
  demo_mini = JSON.parse(demo_mini)

  route do |r|
    # GET / request
    r.root do
      r.redirect '/mini'
    end

    # /hello branch
    r.on 'mini' do
      # GET /mini request
      r.get do
        MessagePack.pack(demo_mini)
      end
    end

    r.on 'big' do
      r.get do
        MessagePack.pack(demo_big)
      end
    end
  end
end

run App.freeze.app
