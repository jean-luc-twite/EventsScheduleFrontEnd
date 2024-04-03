# Use a single-stage Dockerfile
FROM node:18-slim

WORKDIR /

# Install dependencies, including AWS CLI
RUN apt-get update \
    && apt-get install -y \
        curl \
        unzip \
    && rm -rf /var/lib/apt/lists/* \
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install \
    && rm -rf awscliv2.zip ./aws

# Copy package.json, package-lock.json, and yarn.lock to the container
COPY ./package*.json ./
COPY ./yarn.lock ./

 RUN npm install \
     && npm cache clean --force

# Copy the remaining application code
COPY . .

# Build the React app using Yarn 
RUN yarn build

# Expose the port on which the app will run
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
