import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is REAP?</Accordion.Header>
        <Accordion.Body>
        REAP is an encrypted private
        storage service for cryptocurrency wallet seed phrases.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why is REAP essential?</Accordion.Header>
        <Accordion.Body>
        It's vital because seed phrases are the keys to accessing cryptocurrency wallets, and losing or compromising them can result in loss of assets. REAP ensures that these phrases are kept secure and private.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does REAP secure my seed phrases?</Accordion.Header>
        <Accordion.Body>
        REAP employs state-of-the-art encryption methods to store your wallet seed phrases securely. Only you, as the owner, have access to this information, ensuring that your seed phrases remain confidential and protected from unauthorized access.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How can I use REAP</Accordion.Header>
        <Accordion.Body>
        To get started using REAP please download our mobile app.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How can I trust that REAP won't have access to my seed phrases?</Accordion.Header>
        <Accordion.Body>
        REAP's architecture is designed with user privacy at its core, employing a system where the encryption is done on the device and the encryption keys reside solely with the user. This ensures that the seed phrases are inaccessible even to REAP. Being open-source with a commitment to transparency in its security processes, coupled with regular third-party audits and strict compliance with industry standards, further reinforces the trust in REAP's ability to safeguard your seed phrases.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Faq;
