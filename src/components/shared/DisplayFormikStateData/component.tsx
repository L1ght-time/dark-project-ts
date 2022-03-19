import { IProps } from './types';

export function DisplayFormikStateData({ values, replacer = null, space = 2 }: IProps): JSX.Element {
  return <pre>{JSON.stringify(values, replacer, space)}</pre>;
}
