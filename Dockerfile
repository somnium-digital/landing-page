# Gunakan image Node.js resmi
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy file ke dalam container
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "start"]
