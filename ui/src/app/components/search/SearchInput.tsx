import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef, Ref } from 'react';

export interface SearchInputProps {
  value: string,
  onChange: (v: string) => void,
  debounce: number,
  placeholder: string;
  ref: Ref<HTMLInputElement>,
};

/**
 * The SearchInput is a text input field used for filtering.
 * The input is debounced and the onChange handler is called
 * with a delay.
 */
const SearchInput = (props: SearchInputProps) => {
  const valueRef = useRef(props.value);
  const [state, setState] = useState(props.value);

  useEffect(() => {
    // Prevent update loops and unwanted calls
    if (valueRef.current === state) {
      return;
    }
    const tRef = setTimeout(() => {
      props.onChange(state);
    }, props.debounce);

    valueRef.current = state;
    return () => {
      clearTimeout(tRef);
    };
  }, [state, props.debounce, props.onChange]);

  return (
    <div className="input-group">
      <span className="input-group-addon">
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        type="text" className="form-control"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={props.placeholder}
        ref={props.ref}
      />
    </div>
  );
};

export default SearchInput;
