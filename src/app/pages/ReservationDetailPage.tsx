import { useNavigate, useParams } from 'react-router-dom';
import { ReservationDetail } from '../components/ReservationDetail';

export function ReservationDetailPage() {
  const navigate = useNavigate();
  const { reservationId } = useParams<{ reservationId: string }>();

  const handleClose = () => {
    navigate('/client-space');
  };

  return (
    <ReservationDetail 
      onClose={handleClose} 
      reservationId={reservationId}
    />
  );
}

