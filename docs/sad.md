# Software Architecture Document (SAD)

# Smart Home Ecosystem

Version: 1.0.0

Author: Naufal

---

# 1. Introduction

## 1.1 Purpose

Dokumen ini menjelaskan arsitektur perangkat lunak Smart Home Ecosystem, termasuk struktur sistem, komunikasi antar komponen, aliran data, pemilihan teknologi, serta strategi pengembangan agar sistem dapat berkembang menjadi platform Smart Home yang scalable, modular, dan mudah dipelihara.

---

## 1.2 Objectives

Arsitektur ini dirancang agar sistem:

- Modular
- Scalable
- Realtime
- Reliable
- Maintainable
- Cross Platform
- Cloud Native
- Hybrid IoT

---

# 2. Architecture Philosophy

Smart Home Ecosystem dibangun menggunakan filosofi:

> **Cloud Enhances the Device, Not Replaces It**

Artinya:

ESP32 tetap mampu menjalankan fungsi dasar walaupun internet terputus, sedangkan cloud bertugas memberikan fitur tambahan seperti monitoring, sinkronisasi, AI, automation, dan remote access.

---

# 3. Architecture Style

Project menggunakan pendekatan:

- Client-Server Architecture
- Layered Architecture
- Event Driven Architecture
- Hybrid IoT Architecture
- MQTT Publish/Subscribe
- Modular Architecture

---

# 4. High Level Architecture

```text
                     Internet
                         │
                         ▼
                ┌─────────────────┐
                │  Web / Mobile   │
                │  Next.js (PWA)  │
                └─────────────────┘
                         │
                    HTTPS / WSS
                         │
                         ▼
                ┌─────────────────┐
                │   Backend API   │
                │    Next.js      │
                └─────────────────┘
                 │      │      │
      Supabase   │      │      │ MQTT
                 │      │      ▼
                 │      │ ┌──────────────┐
                 │      └▶│ MQTT Broker  │
                 │        └──────────────┘
                 │               │
                 ▼               ▼
          ┌────────────┐   ┌────────────┐
          │ Supabase   │   │   ESP32    │
          └────────────┘   └────────────┘
                                   │
                                   ▼
                            Relay / Sensor
```

---

# 5. Layer Architecture

## Client Layer

Platform:

- Web
- Android
- iOS
- PWA

Responsibilities:

- User Interface
- Authentication
- Dashboard
- Device Control
- Monitoring
- Assistant

---

## Backend Layer

Responsibilities:

- API
- Authentication
- Scheduler
- AI
- Notification
- MQTT Gateway
- Business Logic
- Logging

---

## Data Layer

Responsibilities:

- User Data
- Device Data
- Scheduler
- Logs
- Configuration

Database:

Supabase PostgreSQL

---

## Communication Layer

Responsibilities:

- MQTT Broker
- Publish
- Subscribe
- Heartbeat
- Device Status
- Command Delivery

---

## Device Layer

Responsibilities:

- Relay Control
- Sensor Reading
- WiFi
- MQTT
- Local Scheduler
- Local Storage

---

# 6. Hybrid Architecture

## Local Services

Tetap berjalan tanpa internet.

- Relay
- Manual Button
- Local Scheduler
- Sensor Reading

---

## Cloud Services

Memerlukan koneksi internet.

- Dashboard
- Remote Control
- AI Assistant
- Notification
- Logs
- Monitoring
- Synchronization

---

# 7. Communication Flow

## Device Control

```text
User

↓

Dashboard

↓

Backend API

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
Relay Changed

↓

ESP32

↓

MQTT Publish

↓

Backend

↓

Supabase

↓

Realtime

↓

Dashboard
```

---

## AI Assistant

```text
User

↓

Assistant

↓

Intent Detection

↓

Backend

↓

MQTT

↓

ESP32

↓

Device
```

---

# 8. Source of Truth

Source of Truth sistem adalah:

ESP32

Alasan:

- Status relay berasal dari perangkat fisik.
- Menghindari data palsu di dashboard.
- Sinkronisasi lebih akurat.

Flow:

```text
Dashboard

↓

Command

↓

ESP32

↓

Success

↓

Status Publish

↓

Backend

↓

Database

↓

Realtime
```

---

# 9. Technology Decision

## Frontend

Technology

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

Reason

- Modern
- Responsive
- PWA Ready
- SEO
- Fast Development

---

## Backend

Technology

- Next.js API

Reason

- Unified Codebase
- Easy Deployment
- Scalable

---

## Database

Technology

- Supabase

Reason

- PostgreSQL
- Auth
- Realtime
- Storage

---

## Communication

Technology

- MQTT

Reason

- Lightweight
- Fast
- Reliable
- Standard IoT Protocol

---

## Device

Technology

- ESP32

Reason

- WiFi
- Powerful
- Affordable
- Community Support

---

# 10. Design Principles

- Single Responsibility
- Separation of Concerns
- Modular Design
- Event Driven
- Reusable Components
- Low Coupling
- High Cohesion

---

# 11. Component Overview

Frontend

- Dashboard
- Devices
- Rooms
- Scheduler
- Logs
- Assistant
- Settings

---

Backend

- Auth Service
- Device Service
- MQTT Service
- Scheduler Service
- AI Service
- Notification Service
- Log Service

---

ESP32

- WiFi Manager
- MQTT Manager
- Relay Manager
- Scheduler Manager
- Config Manager
- Storage Manager

---

# 12. Folder Structure

```text
smart-home-ecosystem/

docs/

frontend/

backend/

firmware/

shared/

scripts/

docker/

.github/
```

---

## Frontend

```text
frontend/

app/

components/

hooks/

services/

types/

utils/

styles/
```

---

## Backend

```text
backend/

api/

services/

repositories/

middlewares/

mqtt/

utils/
```

---

## Firmware

```text
firmware/

src/

wifi/

mqtt/

relay/

scheduler/

storage/

config/

main.cpp
```

---

# 13. Scalability Strategy

Sistem dirancang agar mendukung:

- Multi User
- Multi Device
- Multi Room
- Multi Home
- Multi ESP32

Tanpa mengubah arsitektur utama.

---

# 14. Future Expansion

Perangkat yang dapat ditambahkan:

- Smart Lamp
- Smart Plug
- Smart Fan
- Smart Curtain
- Smart Door Lock
- Smart Camera
- Temperature Sensor
- Humidity Sensor
- Motion Sensor
- Water Pump
- Smart Garden

---

# 15. Security Architecture

Authentication

Supabase Auth

---

Authorization

JWT

---

Database

Row Level Security

---

Communication

HTTPS

MQTT Authentication

TLS Encryption

---

Secrets

Environment Variables

---

# 16. Reliability Strategy

ESP32 harus mampu:

- Auto Reconnect WiFi
- Auto Reconnect MQTT
- Retry Publish
- Retry Subscribe
- Heartbeat
- Offline Detection

---

# 17. Performance Goals

Dashboard Response

< 1 Second

---

MQTT Latency

< 500 ms

---

Reconnect WiFi

< 10 Seconds

---

Realtime Update

< 1 Second

---

# 18. Deployment Architecture

```text
                Vercel
                   │
                   ▼
           Next.js Application
                   │
      ┌────────────┴────────────┐
      ▼                         ▼
 Supabase                 HiveMQ Cloud
      │                         │
      └────────────┬────────────┘
                   ▼
                 ESP32
```

---

# 19. Future Architecture

Version 1

Dashboard

↓

MQTT

↓

ESP32

---

Version 2

Dashboard

↓

Automation

↓

MQTT

↓

ESP32

---

Version 3

Dashboard

↓

AI Assistant

↓

Automation Engine

↓

MQTT

↓

ESP32

---

Version 4

Dashboard

↓

Cloud Platform

↓

AI Engine

↓

Notification

↓

Analytics

↓

MQTT

↓

Multi ESP32

---

# 20. Architecture Summary

Smart Home Ecosystem menggunakan arsitektur Hybrid IoT yang memisahkan tanggung jawab antara Client, Cloud, dan Device.

Frontend bertanggung jawab terhadap pengalaman pengguna, Backend menangani business logic dan komunikasi dengan cloud, sedangkan ESP32 berfokus pada eksekusi perangkat keras. Komunikasi dilakukan menggunakan protokol MQTT untuk memperoleh performa realtime yang ringan dan efisien.

Pendekatan ini memungkinkan sistem berkembang dari proyek Smart Lamp sederhana menjadi platform Smart Home yang mendukung banyak perangkat, banyak pengguna, AI Assistant, automation, monitoring, dan integrasi teknologi IoT lainnya tanpa mengubah fondasi arsitektur yang telah dibangun.
