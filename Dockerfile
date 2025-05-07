# Gunakan image PHP dengan FPM
FROM php:8.1-fpm

# Install dependencies
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip git unzip

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd pdo pdo_mysql

# Set working directory
WORKDIR /var/www

# Copy composer.json dan composer.lock
COPY composer.json composer.lock ./

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install dependencies Laravel
RUN composer install --no-dev --optimize-autoloader

# Copy seluruh aplikasi
COPY . .

# Set permission untuk file Laravel
RUN chown -R www-data:www-data /var/www

# Expose port 9000 dan jalankan PHP-FPM
EXPOSE 9000
CMD ["php-fpm"]
