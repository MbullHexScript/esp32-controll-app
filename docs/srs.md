# Software Requirements Specification (SRS)

# Smart Home Ecosystem

**Version:** 1.0.0

**Author:** Naufal

---

# 1. Introduction

## 1.1 Purpose

Smart Home Ecosystem adalah platform Internet of Things (IoT) yang dirancang untuk mengontrol, memonitor, dan mengotomatisasi berbagai perangkat rumah pintar melalui satu aplikasi terintegrasi.

Platform ini menghubungkan perangkat ESP32 dengan layanan cloud sehingga pengguna dapat mengontrol perangkat melalui Web, Android, dan iOS menggunakan satu akun.

Sistem dirancang menggunakan pendekatan **Hybrid Architecture**, yaitu perangkat tetap dapat menjalankan fungsi-fungsi dasar secara lokal ketika koneksi internet tidak tersedia, sementara fitur cloud akan aktif kembali secara otomatis ketika koneksi dipulihkan.

---

## 1.2 Objectives

Project ini bertujuan untuk:

- Membangun platform Smart Home modern.
- Mengontrol berbagai perangkat IoT secara realtime.
- Menyediakan dashboard monitoring.
- Menyediakan sistem automation.
- Menyediakan AI Assistant.
- Menjadi pondasi ekosistem Smart Home yang scalable.

---

## 1.3 Scope

Versi pertama (MVP) mencakup:

- Authentication
- Device Management
- Smart Lamp Control
- Device Monitoring
- Activity Logs
- Realtime Communication
- MQTT Integration

Versi selanjutnya akan mencakup:

- Scheduler
- Automation
- AI Assistant
- Voice Command
- Smart Sensor
- Smart Plug
- Smart Fan
- Smart Door Lock
- Smart Camera
- Push Notification

---

# 2. Overall Description

## 2.1 Product Perspective

Sistem terdiri dari tiga layer utama.

```text
Client Layer
(Web / Android / iPhone)

↓

Cloud Layer
(API + Database + MQTT + AI)

↓

Device Layer
(ESP32 + Relay + Sensor)
```

---

## 2.2 Product Philosophy

Cloud enhances the device, not replaces it.

ESP32 tetap mampu menjalankan fungsi dasar walaupun internet terputus.

Cloud bertugas untuk:

- Monitoring
- Synchronization
- AI
- Database
- Authentication
- Remote Control

---

## 2.3 Target Platform

- Web Application
- Progressive Web App (PWA)
- Android
- iPhone

Menggunakan satu codebase.

---

# 3. Technology Stack

## Frontend

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

---

## Backend

- Next.js API Routes

---

## Database

- Supabase

---

## Authentication

- Supabase Auth

---

## Communication

- MQTT

---

## Broker

- HiveMQ Cloud

---

## Deployment

- Vercel

---

## Firmware

- ESP32
- Arduino Framework

---

# 4. Actors

## User

Memiliki hak untuk:

- Login
- Mengontrol perangkat
- Membuat scheduler
- Melihat monitoring
- Menggunakan AI Assistant

---

## ESP32

Bertugas:

- Mengontrol relay
- Membaca sensor
- Mengirim status
- Menjalankan scheduler lokal
- Menerima command MQTT

---

## Cloud Server

Bertugas:

- Authentication
- Database
- MQTT Gateway
- AI
- Scheduler
- Logging
- Notification

---

# 5. Functional Requirements

## Authentication

User dapat:

- Register
- Login
- Logout
- Reset Password
- Login menggunakan Google

---

## Dashboard

Dashboard harus menampilkan:

- Device Online
- Device Offline
- Last Seen
- Recent Activity
- Quick Control

---

## Device Management

User dapat:

- Menambah Device
- Menghapus Device
- Rename Device
- Assign Device ke Room
- Melihat Device Detail

---

## Device Control

User dapat:

- ON/OFF Device
- Kontrol beberapa device sekaligus
- Melihat status realtime

---

## Monitoring

Sistem menampilkan:

- Online Status
- WiFi Status
- RSSI
- Last Seen
- Uptime

---

## Activity Logs

Semua aktivitas harus dicatat.

Contoh:

- Lamp ON
- Lamp OFF
- Device Connected
- Device Disconnected

---

## Scheduler

User dapat:

- Membuat jadwal
- Mengubah jadwal
- Menghapus jadwal
- Mengaktifkan jadwal
- Menonaktifkan jadwal

---

## AI Assistant

Assistant dapat memahami perintah natural language.

Contoh:

"Nyalakan lampu ruang tamu"

↓

Publish MQTT

↓

ESP32

---

# 6. Non Functional Requirements

## Performance

- Respon kontrol < 1 detik
- Dashboard realtime
- MQTT latency rendah

---

## Reliability

Sistem tetap berjalan ketika:

- Internet terputus
- WiFi reconnect
- ESP32 restart

---

## Scalability

Mendukung:

- Multi User
- Multi Device
- Multi Room

---

## Security

Menggunakan:

- HTTPS
- JWT
- MQTT Authentication
- Row Level Security (Supabase)

---

# 7. Communication Architecture

## Device Control

```text
User

↓

Dashboard

↓

API

↓

MQTT Broker

↓

ESP32

↓

Relay

↓

Lamp
```

---

## Device Status

```text
ESP32

↓

MQTT

↓

Backend

↓

Database

↓

Realtime

↓

Dashboard
```

---

# 8. Hybrid Architecture

## Local Features

Tetap berjalan ketika internet mati.

- Relay
- Scheduler Lokal
- Sensor
- Button Manual

---

## Cloud Features

Memerlukan internet.

- Dashboard
- Remote Control
- AI Assistant
- Logs
- Notification
- Monitoring
- Scheduler Cloud

---

# 9. MQTT Topic Design

```text
home/

├── device/
│
├── esp32-001/
│      ├── command
│      ├── status
│      ├── heartbeat
│      ├── config
│      └── scheduler
│
├── esp32-002/
│      ├── command
│      ├── status
│      ├── heartbeat
│      ├── config
│      └── scheduler
```

---

# 10. Database Overview

## users

- id
- email
- fullname

---

## devices

- id
- name
- room
- status
- last_seen

---

## schedules

- id
- device_id
- action
- time
- repeat
- enabled

---

## logs

- id
- device_id
- action
- timestamp

---

## rooms

- id
- name

---

# 11. Application Modules

## Authentication

- Login
- Register

---

## Dashboard

- Device Summary
- Quick Control
- Recent Activity

---

## Devices

- Device List
- Device Detail
- Device Control

---

## Scheduler

- Schedule List
- Create Schedule

---

## Monitoring

- Device Health
- WiFi
- RSSI
- Uptime

---

## Logs

- Activity History

---

## Assistant

- Chat
- Voice Command

---

## Settings

- Profile
- Theme
- Notification

---

# 12. Future Features

- Smart Plug
- Smart Fan
- Smart Door Lock
- Smart Curtain
- Smart Sensor
- Smart Camera
- Face Recognition
- Energy Monitoring
- OTA Firmware Update
- Multi Home
- Multi Family
- AI Automation
- AI Recommendation
- AI Voice Assistant
- Smart Scene
- Push Notification
- Weather Automation
- Geofencing
- Local Network Discovery
- BLE Provisioning
- Matter Protocol Support

---

# 13. Development Roadmap

## Phase 1

- Authentication
- Dashboard
- Device Control
- MQTT
- Monitoring

---

## Phase 2

- Scheduler
- Logs
- Device Management
- Room Management

---

## Phase 3

- AI Assistant
- Voice Command
- Smart Automation

---

## Phase 4

- Mobile Application
- OTA Update
- Notification

---

## Phase 5

- Smart Home Ecosystem
- AI Automation
- Multi Device
- Multi User
- Matter Integration

---

# 14. Vision

Smart Home Ecosystem bukan hanya aplikasi untuk menghidupkan atau mematikan lampu, tetapi sebuah platform yang mampu menghubungkan berbagai perangkat IoT dalam satu ekosistem yang modern, aman, realtime, dan mudah dikembangkan.

Platform ini dirancang agar dapat berkembang dari sebuah proyek Smart Lamp sederhana menjadi sistem Smart Home lengkap yang mendukung berbagai jenis perangkat, otomatisasi, monitoring, serta integrasi Artificial Intelligence untuk menciptakan pengalaman rumah pintar yang lebih cerdas.
