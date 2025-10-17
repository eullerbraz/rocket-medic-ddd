const Address = require('./address');
const Consulta = require('./appointment');
const EmergencyContact = require('./emergency-contact');
const Exame = require('./exam');
const Doctor = require('./doctor');
const Paciente = require('./patient');
const Prontuario = require('./medical-record');

const address1 = new Address(
  'Rua 1',
  '123',
  'Cidade 1',
  'Estado 1',
  '12345-678'
);

const emergencyContact = new EmergencyContact('Contato 1', 'Telefone 1');

const paciente1 = new Paciente(
  '1',
  '123456789',
  'João',
  '1990-01-01',
  'Masculino',
  'A+',
  'Alergia 1',
  address1,
  'Telefone 1',
  'Email 1',
  emergencyContact
);

const doctor1 = new Doctor(
  '1',
  'CRM 1',
  'Dr. Médico',
  ['Especialidade 1', 'Especialidade 2'],
  'Telefone 1'
);

doctor1.addWorkingHours('Segunda-feira', '08:00 - 12:00');
doctor1.addWorkingHours('Quarta-feira', '12:00 - 17:00');

const consulta1 = new Consulta(
  '1',
  '2023-01-01',
  paciente1,
  doctor1,
  'Motivo da consulta',
  'Agendada',
  'Observações da consulta'
);

const exame1 = new Exame(
  '1',
  'Tipo de exame',
  'Resultado do exame',
  '2023-01-01',
  'Local do exame',
  'Responsável pelo exame',
  paciente1
);

const prontuario1 = new Prontuario('1', paciente1);

paciente1.agendarConsulta(consulta1);
paciente1.adicionarExame(exame1);

prontuario1.adicionarDiagnostico('Diagnóstico 1');

prontuario1.adicionarTratamento('Tratamento 1');

prontuario1.adicionarMedicamento('Medicamento 1');

console.log(prontuario1);
console.log(doctor1.listWorkingHours());
