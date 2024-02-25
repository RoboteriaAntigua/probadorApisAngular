# PRobador de apis Laravel

# Nota: Interceptors en angular 16 cambia, implementando a la antigua


# LOcalstore
    Establecido en las solicitudes login y register, para el token que viene del backend.
    localStorage.setItem('token_marcos',data);
    Usado en el interceptor

# Interceptors
    Usados para agregar el token en la cabezera de cada solicitud.

    token = localStorage.getItem('token_marcos');
    const requestToken = request.clone({
      setHeaders:{ authorization: `Bearer ${token}`}
    });
    return next.handle(requestToken);