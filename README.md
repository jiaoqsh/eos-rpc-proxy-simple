## eos-rpc-proxy-simple


### Installation

- Using yarn

```
yarn install
```

- Using npm

```
npm install
```

### Development

```
npm run dev

curl http://localhost:3000/v1/chain/get_info | jq
curl -H 'Content-Type: application/json' -d '{"block_num_or_id":20}' http://localhost:3000/v1/chain/get_block | jq
```

### Running tests

```
npm test
```

### Linting

```
npm run lint
```

### Docker

```
docker build -t eos-rpc-proxy ./

docker run -d -p 3001:3001 --name eos-rpc-proxy eos-rpc-proxy

curl http://localhost:3001/v1/chain/get_info
```
