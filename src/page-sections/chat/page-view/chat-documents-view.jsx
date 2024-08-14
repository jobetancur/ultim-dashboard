import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/firebaseContext';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark
    }
    }));

export default function ChatDocumentsView () {
  return (
    <div className="pt-2 pb-4">
        <h2>
            En esta sección podrás cargar tus documentos o vectores a la base de datos
        </h2>

    </div>
  );
}