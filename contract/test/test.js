const ipfsClient = require('ipfs-http-client');

const ipfs = ipfsClient({ host: 'localhost', port: '5001', protocol: 'http' });

it('should upload a file to IPFS', async () => {
  const fileData = Buffer.from('Hello, IPFS!');

  const result = await ipfs.add(fileData);
  const ipfsCID = result.cid.toString();

  assert.notEqual(ipfsCID, '', 'IPFS CID should not be empty');
});
