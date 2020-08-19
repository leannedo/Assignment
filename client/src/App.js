import React from "react";
import Layout from "./layout/index";
import Dashboard from "./views/Dashboard";
import CategorySelectionModal from "./components/Modal/CategorySelectionModal";
import Input from "./components/Input";
import CategoryCreationModal from "./components/Modal/CategoryEditingModal";
import ConfirmModal from "./components/Modal/ConfirmModal";

function App() {
  return (
    <Layout>
      <Dashboard />
      <ConfirmModal okText="Delete this category?" cancelText="Cancel" />
    </Layout>
  );
}

export default App;