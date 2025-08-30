FROM node:22-alpine AS builder
WORKDIR /app

COPY .env ./
# ARG API_KEY
# ARG BASE_URL
# ARG SMTP_HOST
# ARG SMTP_PORT
# ARG SMTP_SECURE
# ARG SMTP_USER
# ARG SMTP_PASSWORD
# ARG SMTP_FROM_EMAIL
# ARG SMTP_TO_EMAIL
# ARG CMS_HOSTNAME

# ENV API_KEY=$API_KEY \
#   BASE_URL=$BASE_URL \
#   SMTP_HOST=$SMTP_HOST \
#   SMTP_PORT=$SMTP_PORT \
#   SMTP_SECURE=$SMTP_SECURE \
#   SMTP_USER=$SMTP_USER \
#   SMTP_PASSWORD=$SMTP_PASSWORD \
#   SMTP_FROM_EMAIL=$SMTP_FROM_EMAIL \
#   SMTP_TO_EMAIL=$SMTP_TO_EMAIL \
#   CMS_HOSTNAME=$CMS_HOSTNAME

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- runtime stage ---
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production

# Copy Next standalone server
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/standalone/.env ./
# Copy static assets
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
