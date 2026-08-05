import { useState } from 'react';
import styles from './GuessForm.module.scss';

interface Props {
  disabled: boolean;
  onSubmit: (word: string) => void;
}

export default function GuessForm({ disabled, onSubmit }: Props) {
  const [value, setValue] = useState('');

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (!value.trim()) return;
        onSubmit(value);
        setValue('');
      }}
    >
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          // Hangul IME: Enter while composing commits the syllable, not the form.
          if (e.key === 'Enter' && e.nativeEvent.isComposing) e.preventDefault();
        }}
        placeholder="추측할 단어를 입력하세요"
        disabled={disabled}
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
        enterKeyHint="send"
      />
      <button className={styles.submit} type="submit" disabled={disabled}>
        추측하기
      </button>
    </form>
  );
}
