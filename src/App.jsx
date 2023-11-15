import "./App.css";
import axios from "axios";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { FaissStore } from "langchain/vectorstores/faiss";
import {
    JSONLoader,
    JSONLinesLoader,
} from "langchain/document_loaders/fs/json";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { BufferMemory } from "langchain/memory";
import { OpenAI } from "langchain/llms/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
// import Cookies from 'universal-cookie';
// const cookies = new Cookies(null, { path: '/' });

const App = () => {
  const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:4000",
  });

  const handleLogin = () => {
    let x = document.getElementById("username").value;
    let y = document.getElementById("password").value;

    try {
     instance.post('/login', {x, y})
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="main-container">
        <div className="login-box-container">
          <div className="login-box-heading">
            Login Here
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button type="submit" onClick={handleLogin}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
