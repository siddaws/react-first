
import './App.scss'
import EditPanel from './assets/EditPanel'
import Header from './assets/Header'
import SectionHome from './assets/SectionHome';
import SectionReputation from './assets/SectionReputation';
import Services from './assets/Services';
import TableSection from './assets/TableSection';



export default function App() {

  return <>
    <Header />
    <EditPanel />
    <SectionHome />
    <TableSection />
    <SectionReputation />
    <Services />
  </>
}

