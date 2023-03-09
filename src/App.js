import logo from './logo.svg';
import './App.css';

function App() {
  
  return (<div className="todoapp stack-large">
  <h1>TodoMatic</h1>
  <form>
    <h2 className="label-wrapper">
      <label htmlFor="new-todo-input" className="label__lg">
        Ne yapmak istersiniz?
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      className="input input__lg"
      name="text"
      autoComplete="off"
    />
    <button type="submit" className="btn btn__primary btn__lg">
      Ekle
    </button>
  </form>
  <div className="filters btn-group stack-exception">
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span>Tüm</span>
      <span className="visually-hidden"> görevleri</span>
      <span className="visually-hidden">göster </span>
    </button>
    <button type="button" className="btn toggle-btn" aria-pressed="false">
      <span>Aktif</span>
      <span className="visually-hidden"> görevleri</span>
      <span className="visually-hidden">göster </span>
    </button>
    <button type="button" className="btn toggle-btn" aria-pressed="false">
      <span>Tamamlanan</span>
      <span className="visually-hidden"> görevleri</span>
      <span className="visually-hidden">göster </span>
    </button>
  </div>
  <h2 id="list-heading">3 belge bulundu</h2>
  <ul
    role="list"
    className="todo-list stack-large stack-exception"
    aria-labelledby="list-heading">
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          Eat
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Düzenle <span className="visually-hidden">Yemek</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Yemek</span>
        </button>
      </div>
    </li>
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-1" type="checkbox" />
        <label className="todo-label" htmlFor="todo-1">
         Uyku
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn__danger">
         <span className="visually-hidden">uykuyuyu</span>
          Sil
        </button>
        <button type="button" className="btn">
          Düzenle <span className="visually-hidden">uykuyuyu</span>
        </button>
      </div>
          <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Tüm </span>
          <span>görevleri</span>
          <span className="visually-hidden">Göster</span>
        </button>
    </li>
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-2" type="checkbox" />
        <label className="todo-label" htmlFor="todo-2">
          Tekrar
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Repeat</span>
        </button>
        <button type="button" className="btn">
          Düzenle <span className="visually-hidden">Repeat</span>
        </button>
      </div>
    </li>
  </ul>
</div> 
);
}

export default App;
