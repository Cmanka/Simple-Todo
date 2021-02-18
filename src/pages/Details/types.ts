import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  id: string;
}

export type DetailsProps = RouteComponentProps<MatchParams>;
