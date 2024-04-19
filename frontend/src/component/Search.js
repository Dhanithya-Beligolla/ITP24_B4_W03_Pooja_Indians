import React , {useState, useEffect} from 'react'
import classes from './search.module.css'
import { useNavigate, useParams } from 'react-router-dom';


export default function Search() {

    const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const { searchTerm } = useParams();

  useEffect(() => {
    setTerm(searchTerm ?? '');
  }, [searchTerm]);

  const search = async () => {
    term ? navigate('/search/' + term) : navigate('/');
  };

  return <div className={classes.container} >
  <input
    type="text"
    placeholder={"Search Customer Name"}
    onChange={e => setTerm(e.target.value)}
    onKeyUp={e => e.key === 'Enter' && search()}
    defaultvalue={searchTerm}
  />
  <button onClick={search}>Search</button>
</div>
}