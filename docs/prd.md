# Product Requirements Document (PRD)

# Smart Home Ecosystem

Version: 1.0.0

Author: Naufal

---

# 1. Product Overview

Smart Home Ecosystem merupakan platform Internet of Things (IoT) yang dirancang untuk memberikan pengalaman mengontrol, memonitor, dan mengotomatisasi perangkat rumah pintar melalui satu aplikasi modern yang dapat berjalan di Web, Android, dan iOS menggunakan satu codebase.

Platform ini tidak hanya berfungsi sebagai aplikasi pengontrol lampu, tetapi sebagai pondasi ekosistem Smart Home yang dapat dikembangkan untuk mendukung berbagai perangkat IoT di masa depan.

---

# 2. Vision

Membangun platform Smart Home modern yang mudah digunakan, scalable, realtime, dan mendukung berbagai perangkat IoT dalam satu ekosistem terpadu.

---

# 3. Mission

- Menyediakan platform Smart Home yang mudah digunakan.
- Menghubungkan berbagai perangkat IoT dalam satu aplikasi.
- Memberikan monitoring perangkat secara realtime.
- Menyediakan sistem automasi yang fleksibel.
- Menyediakan AI Assistant untuk mempermudah interaksi pengguna.
- Menjadi pondasi Smart Home Ecosystem yang dapat terus berkembang.

---

# 4. Problem Statement

Sebagian besar proyek IoT sederhana hanya berfokus pada menghidupkan dan mematikan perangkat melalui aplikasi pihak ketiga seperti Blynk, Sinric Pro, atau platform serupa.

Pendekatan tersebut memiliki beberapa keterbatasan, antara lain:

- Ketergantungan terhadap layanan pihak ketiga.
- Tampilan aplikasi yang tidak dapat disesuaikan.
- Sulit dikembangkan menjadi sistem yang lebih besar.
- Tidak memiliki identitas produk sendiri.
- Integrasi fitur lanjutan terbatas.

Oleh karena itu dibutuhkan sebuah platform yang mampu menjadi pusat kendali seluruh perangkat IoT dengan pengalaman pengguna yang modern dan fleksibel.

---

# 5. Product Goals

## Short Term Goals

- Kontrol perangkat secara realtime.
- Monitoring status perangkat.
- Dashboard modern.
- Multi-device management.
- Multi-room management.

---

## Mid Term Goals

- Scheduler.
- Automation.
- Activity Logs.
- Notification.
- Device Health Monitoring.

---

## Long Term Goals

- AI Assistant.
- Voice Command.
- Smart Scene.
- Energy Monitoring.
- OTA Firmware Update.
- Multi Home.
- Multi User.
- Matter Protocol Support.

---

# 6. Target Users

## Primary Users

- Mahasiswa
- Hobbyist IoT
- Developer IoT
- Smart Home Enthusiast

---

## Secondary Users

- Rumah Tangga
- UMKM
- Laboratorium
- Instansi Pendidikan

---

# 7. Product Value

Platform ini memberikan:

- Kemudahan mengontrol perangkat.
- Dashboard modern.
- Monitoring realtime.
- Sistem automasi.
- AI Assistant.
- Skalabilitas tinggi.
- Pengalaman pengguna yang konsisten di berbagai platform.

---

# 8. Platform

Platform yang didukung:

- Web
- Progressive Web App (PWA)
- Android
- iPhone

Menggunakan satu codebase.

---

# 9. Product Principles

## Modern

Antarmuka harus sederhana, bersih, dan mudah dipahami.

---

## Realtime

Semua perubahan perangkat harus terlihat secara realtime.

---

## Reliable

Perangkat tetap dapat menjalankan fungsi dasar walaupun koneksi internet terputus.

---

## Scalable

Mudah menambahkan jenis perangkat baru tanpa mengubah arsitektur utama.

---

## Modular

Setiap modul dikembangkan secara independen.

---

# 10. Core Features

## Authentication

- Login
- Register
- Google Login
- Forgot Password

---

## Dashboard

- Device Summary
- Online Status
- Offline Status
- Recent Activity
- Quick Control

---

## Device Management

- Add Device
- Remove Device
- Rename Device
- Room Assignment
- Device Information

---

## Device Control

- ON/OFF Device
- Realtime Status
- Multi Device Control

---

## Room Management

- Create Room
- Edit Room
- Delete Room
- Device Grouping

---

## Monitoring

- Device Health
- WiFi Signal
- Last Seen
- Uptime

---

## Scheduler

- Create Schedule
- Edit Schedule
- Delete Schedule
- Enable Schedule
- Disable Schedule

---

## Activity Logs

- Device Logs
- User Logs
- Scheduler Logs

---

## Assistant

- Chat Interface
- Natural Language Command
- Voice Command (Future)

---

## Settings

- Profile
- Theme
- Notification
- Device Settings

---

# 11. Product Roadmap

## Version 1 (MVP)

Target:

Membangun platform dasar yang mampu mengontrol perangkat IoT secara realtime.

Fitur:

- Authentication
- Dashboard
- Device Management
- Device Control
- Monitoring
- Activity Logs

---

## Version 2

Target:

Menambahkan automasi perangkat.

Fitur:

- Scheduler
- Room Management
- Scene
- Notification

---

## Version 3

Target:

Interaksi menggunakan AI.

Fitur:

- AI Assistant
- Chat
- Voice Command
- AI Automation

---

## Version 4

Target:

Membangun Smart Home Ecosystem.

Fitur:

- Smart Plug
- Smart Fan
- Smart Curtain
- Smart Door Lock
- Smart Camera
- Smart Sensor

---

# 12. User Journey

## First Time User

Open Application

↓

Register

↓

Login

↓

Dashboard

↓

Add Device

↓

Pair Device

↓

Device Connected

↓

Start Controlling Device

---

## Daily Usage

Open Application

↓

Dashboard

↓

Monitor Device

↓

Control Device

↓

View Activity

↓

Done

---

## AI Assistant Flow

Open Assistant

↓

Type Command

↓

AI Understands Intent

↓

Backend Validation

↓

MQTT Publish

↓

ESP32 Execute

↓

Device Status Update

↓

Dashboard Updated

---

# 13. Success Metrics

Platform dianggap berhasil apabila:

- User dapat mengontrol perangkat secara realtime.
- Status perangkat selalu sinkron.
- Dashboard menampilkan informasi realtime.
- Scheduler berjalan sesuai waktu.
- ESP32 mampu reconnect otomatis.
- User dapat mengelola beberapa perangkat sekaligus.

---

# 14. Out of Scope (Version 1)

Fitur berikut tidak termasuk pada versi pertama:

- CCTV Streaming
- Face Recognition
- Energy Analytics
- OTA Firmware Update
- Matter Protocol
- BLE Provisioning
- Multi Home
- AI Recommendation
- Voice Recognition Offline

---

# 15. Future Vision

Smart Home Ecosystem dirancang bukan sebagai aplikasi pengontrol lampu, melainkan sebagai platform Smart Home yang dapat menjadi pusat kendali seluruh perangkat IoT.

Ke depannya platform akan mendukung integrasi dengan berbagai perangkat seperti Smart Lamp, Smart Plug, Smart Fan, Smart Door Lock, Smart Curtain, Smart Camera, serta AI Assistant yang mampu memahami perintah natural language dan membantu pengguna dalam mengelola seluruh ekosistem rumah pintar melalui satu aplikasi yang modern, realtime, dan mudah digunakan.
