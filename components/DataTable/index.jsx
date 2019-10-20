/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { Link } from '../../routes';
import css from './style.scss';

const useStyles = makeStyles({
  actionButton: {
    padding: '9px 18px',
    borderRadius: '0px'
  },
  tableHover: {
    transition: '0.1s ease'
  },
  lastColumn: {
    padding: '0px'
  },
  iconButton: {
    padding: '6px',
    margin: '5px 2px'
  }
});

const DataTable = ({ data }) => {
  const classes = useStyles({});

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
        <li>Email</li>
        <li>CPF</li>
        <li>Data de Nascimento</li>
        <li>Ações</li>
      </ul>

      <Paper>
        <Table aria-label="simple table">
          <TableBody>
            {data.map(element => (
              <TableRow
                id={element.id}
                key={`row ${element.id}-${element.cpf}`}
                hover
                className={classes.tableHover}
              >
                <TableCell width="25%" align="left">
                  {element.fullName}
                </TableCell>
                <TableCell width="auto" align="center">
                  {element.email}
                </TableCell>
                <TableCell width="20%" align="center">
                  {element.cpf}
                </TableCell>
                <TableCell width="20%" align="center">
                  {element.birthDate}
                </TableCell>
                <TableCell
                  className={classes.lastColumn}
                  width="10%"
                  align="center"
                >
                  <div className={css.actionsRow}>
                    <Link
                      route={`/edit/${element.id}`}
                      params={{ action: 'edit', id: element.id }}
                    >
                      <IconButton
                        className={`${classes.iconButton} ${css.editIcon}`}
                      >
                        <EditIcon color="primary" />
                      </IconButton>
                    </Link>
                    <Link
                      route={`/remove/${element.id}`}
                      params={{ action: 'remove', id: element.id }}
                    >
                      <IconButton
                        className={`${classes.iconButton} ${css.deleteIcon}`}
                      >
                        <DeleteIcon color="secondary" />
                      </IconButton>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      fullname: PropTypes.string,
      CPF: PropTypes.string,
      birthdate: PropTypes.string
    })
  ).isRequired
};

export default DataTable;
