/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Link } from '../../routes';
import css from './style.scss';

const useStyles = makeStyles({
  actionButton: {
    padding: '9px 18px',
    borderRadius: '0px'
  }
});

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div className={css.wrapper}>
      <div className={css.actionsHolder}>
        <Link route="/add" params={{ action: 'add' }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.actionButton}
          >
            Adicionar
          </Button>
        </Link>
      </div>
      <ul className={css.tableLabels}>
        <li>Nome</li>
        <li>CPF</li>
        <li>Data de Nascimento</li>
        <li>Ações</li>
      </ul>

      <Paper>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow hover>
              <TableCell width="auto" align="left">
                Bisca
              </TableCell>
              <TableCell width="20%" align="center">
                464.708.658.72
              </TableCell>
              <TableCell width="20%" align="center">
                25/08/1995
              </TableCell>
              <TableCell width="20%" align="center">
                X
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
