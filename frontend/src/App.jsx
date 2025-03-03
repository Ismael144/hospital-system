import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin'

// Middleware
import { ErrorBoundary } from './middleware/ErrorBoundary';
import { LoggingMiddleware } from './middleware/LoggingMiddleware';
import { AuthMiddleware } from './middleware/AuthMiddleware';
// Patients Imports
import { PatientCreate, PatientIndex, PatientDetail } from './pages/patients'
// Bed Imports
import { BedIndex, BedCreate, BedUpdate, BedDetails } from './pages/bed'
// Medication imports
import { MedicationIndex, MedicationCreate, MedicationUpdate, MedicationDetails } from './pages/medications'

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <LoggingMiddleware>
          <Routes>
            <Route path="/signin" element={<Signin />} />

            <Route element={<AuthMiddleware />}>
              <Route path="/" element={<Home />} />
              <Route path="/patients">
                <Route path="" element={<PatientIndex />} index />
                <Route path="create/" element={<PatientCreate />} />
                <Route path=":id" element={<PatientDetail />} />
              </Route>
              <Route path="/beds">
                <Route path="" element={<BedIndex />} index />
                <Route path=":id/" element={<BedDetails />} index />
                <Route path="create" element={<BedCreate />} />
                <Route path=":bedId/edit" element={<BedUpdate />} />
              </Route>
              <Route path="/medications">
                <Route path="" element={<MedicationIndex />} index />
                <Route path=":id/" element={<MedicationDetails />} index />
                <Route path="create" element={<MedicationCreate />} />
                <Route path=":medicationId/edit" element={<MedicationUpdate />} />
              </Route>
            </Route>
          </Routes>
        </LoggingMiddleware>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
