FROM php:8.1-apache
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf \
\
&& apt-get update \
&& apt-get install -y --no-install-recommends \
locales apt-utils git libicu-dev g++ libpng-dev libxml2-dev libzip-dev libonig-dev libxslt-dev unzip \
\
&& echo "en_US.UTF-8 UTF-8" > /etc/locale.gen \
&& echo "fr_FR.UTF-8 UTF-8" >> /etc/locale.gen \
&& locale-gen \
\
&& curl -sSk https://getcomposer.org/installer | php -- --disable-tls && \
    mv composer.phar /usr/local/bin/composer \
\
&& curl -sl https://deb.nodesource.com/setup_18.x | bash \
&& apt-get install nodejs \
\
&& mkdir /root/.symfony5/bin/symfony | bash \
&& mkdir /usr/local/bin/symfony | bash \
\
&& curl -sS https://get.symfony.com/cli/installer | bash \
&& mv /root/.symfony5/bin/symfony /usr/local/bin/symfony |bash \
\
&& /usr/local/bin/docker-php-ext-configure \
intl\
&& pecl install apcu && docker-php-ext-enable apcu 

RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions pdo_pgsql intl zip

WORKDIR /var/www

EXPOSE 80