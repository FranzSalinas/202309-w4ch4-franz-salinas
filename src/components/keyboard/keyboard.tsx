import { Key } from '../key/key';

export function Keyboard() {
  return (
    <div className="keyboard-container" role="keyboard">
      <ol className="keyboard">
        <Key></Key>
      </ol>
    </div>
  );
}
