import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header';
import ActionBar from './components/ActionBar/ActionBar';
import SoftwareSelector from './components/SoftwareSelector/SoftwareSelector';
import ConfigurationSelector from './components/ConfigurationSelector/ConfigurationSelector';

function App() {
  return (
    <Layout>
      <div style={{ backgroundColor: 'var(--win95-light-gray)' }}>
        <Header />
        <ActionBar />
      </div>
      <div style={{ padding: '12px', overflow: 'auto', flex: 1 }}>
        <SoftwareSelector />
        <ConfigurationSelector />
      </div>
    </Layout>
  );
}

export default App;
