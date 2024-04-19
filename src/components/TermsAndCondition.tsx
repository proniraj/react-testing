import { Fragment, useState } from 'react';

const TermsAndCondition = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <Fragment>
      <h1>Terms and Conditions</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, alias recusandae. Eos vero autem libero at
        nostrum dolores aspernatur non mollitia adipisci maxime, omnis eum necessitatibus ratione officia nemo?
        Accusamus.
      </p>
      <input type="checkbox" id="agree" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />

      <button disabled={!isChecked}>Submit</button>
    </Fragment>
  );
};

export default TermsAndCondition;
